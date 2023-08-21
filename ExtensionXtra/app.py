from flask import Flask, request, jsonify
from gtts import gTTS
import os

app = Flask(ExtensionXtra)

@app.route('/text-to-speech', methods=['POST'])
def text_to_speech():
    try:
        data = request.json
        text = data['text']
        
        tts = gTTS(text)
        audio_path = 'output.mp3'
        tts.save(audio_path)
        
        return jsonify({"audio_url": audio_path})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if ExtensionXtra == '_main_':
    app.run(debug=True)