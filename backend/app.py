from dotenv import load_dotenv
load_dotenv()
import base64
import os
import io
from PIL import Image
import pdf2image
import google.generativeai as genai

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
        raise FileNotFoundError("No file uploaded")

def process_resume(uploaded_file, input_text):
    pdf_content = input_pdf_setup(uploaded_file)
    response = get_gemini_response(pdf_content, input_text)
    return response

# API endpoint to process resume
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/process-resume', methods=['POST'])
def process_resume_endpoint():
    uploaded_file = request.files['resume']
    input_text = request.form['job_description']
    response = process_resume(uploaded_file, input_text)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)
