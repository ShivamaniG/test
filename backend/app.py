
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
import os
import fitz
import google.generativeai as genai
from flask_cors import CORS
import docx2txt

# Load environment variables
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

app = Flask(__name__, static_folder='build', static_url_path='/')
CORS(app)



def get_gemini_response(input_prompt, pdf_content, job_description):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content([input_prompt, pdf_content, job_description])
    return response.text

def input_pdf_setup(uploaded_file):
    document = fitz.open(stream=uploaded_file.read(), filetype="pdf")
    text_parts = [page.get_text() for page in document]
    pdf_text_content = " ".join(text_parts)
    return pdf_text_content

def input_docx_setup(uploaded_file):
    text = docx2txt.process(uploaded_file)
    return text

def is_resume(file_content):
    # Simple resume detection logic
    keywords = ["experience", "education", "skills", "work", "projects"]
    for keyword in keywords:
        if keyword.lower() in file_content.lower():
            return True
    return False

@app.route('/analyze-resume', methods=['POST'])
def analyze_resume():
    try:
        job_description = request.form.get('job_description')
        if not job_description:
            return jsonify({'error': 'Job description is required.'}), 400

        input_prompt = "You are an experienced Technical Human Resource Manager. Review the provided resume against the job description. Share your professional evaluation on whether the candidate's profile aligns with the role. Highlight the strengths and weaknesses of the applicant in relation to the specified job requirements. Provide a 30-word summary."

        if 'resume' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400

        uploaded_file = request.files['resume']
        file_extension = uploaded_file.filename.split('.')[-1].lower()

        if file_extension == 'pdf':
            file_content = input_pdf_setup(uploaded_file)
        elif file_extension == 'docx':
            file_content = input_docx_setup(uploaded_file)
        else:
            return jsonify({'error': 'Invalid file type. Only PDF and DOCX files are allowed.'}), 400

        if not is_resume(file_content):
            return jsonify({'error': 'The uploaded file does not appear to be a resume.'}), 400

        print(f"Job Description: {job_description}")
        print(f"File Content: {file_content[:50]}...")

        response_text = get_gemini_response(input_prompt, file_content, job_description)
        return jsonify({'response': response_text}), 200

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

@app.route('/')
def serve_react_app():
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
