from dotenv import load_dotenv
load_dotenv()
import base64
import os
import io
from PIL import Image
import pdf2image
import google.generativeai as genai
from flask import Flask, request, jsonify, send_file

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def get_gemini_response(pdf_content, input_text):
    model = genai.GenerativeModel('gemini-pro-vision')
    response = model.generate_content([pdf_content[0], input_text])
    return response.text

def input_pdf_setup(uploaded_file):
    if uploaded_file is not None:
        images = pdf2image.convert_from_bytes(uploaded_file.read())
        first_page = images[0]
        img_byte_arr = io.BytesIO()
        first_page.save(img_byte_arr, format='JPEG')
        img_byte_arr = img_byte_arr.getvalue()
        pdf_parts = [
            {
                "mime_type": "image/jpeg",
                "data": base64.b64encode(img_byte_arr).decode()
            }
        ]
        return pdf_parts
    else:
        raise FileNotFoundError("No File Uploaded")

def process_resume(uploaded_file, input_text):
    pdf_content = input_pdf_setup(uploaded_file)
    response = get_gemini_response(pdf_content, input_text)
    return response

def score_resume(response):
    # Simple scoring logic based on response length
    score = len(response) / 100
    return score

def suggest_improvements(response):
    # Simple suggestion logic based on response content
    suggestions = ["Use keywords from the job description", "Highlight achievements over responsibilities"]
    return suggestions

app = Flask(__name__)

@app.route('/process-resume', methods=['POST'])
def process_resume_endpoint():
    uploaded_file = request.files['resume']
    input_text = request.form['Job_Description']
    response = process_resume(uploaded_file, input_text)
    score = score_resume(response)
    suggestions = suggest_improvements(response)
    return jsonify({
        'response': response,
        'score': score,
        'suggestions': suggestions
    })

@app.route('/upload-resume', methods=['POST'])
def upload_resume():
    uploaded_file = request.files['resume']
    return send_file(
        uploaded_file,
        as_attachment=True,
        attachment_filename='resume.pdf'
    )

if __name__ == '__main__':
    app.run(debug=True)
