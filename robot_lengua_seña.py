import pyttsx3 as voz
import speech_recognition as sr
import serial

# configuración del dispositivo que queremos utilizar
arduino = serial.Serial("COM6",9600)


# iniciando objeto para reconocer la voz
voice=voz.init();
voices=voice.getProperty('voices');
voice.setProperty('voice',voices[0].id);
voice.setProperty('rate',160);

# codigo principal
while True:
    recognizer=sr.Recognizer()
    with sr.Microphone() as source:
        print('Escuchando...');
        audio=recognizer.listen(source,phrase_time_limit=3)
    
    try:
        comando=recognizer.recognize_google(audio, language='es-MX')
        comando=comando.lower()
        comando=comando.split(' ')
        print(comando)

        if 'terminar' in comando:
            break

        if 'hola' in comando:
            dato="tres" 
            arduino.write(dato.encode("ascii"))

        if 'uno' in comando or '1' in comando:
            dato="dos" 
            arduino.write(dato.encode("ascii"))

        if 'dos' in comando or '2' in comando:
            dato="dos" 
            arduino.write(dato.encode("ascii"))

        if 'tres' in comando or '3' in comando:
            dato="tres"
            arduino.write(dato.encode("ascii"))

        if 'cuatro' in comando  or '4' in comando:
            dato="cuatro"
            arduino.write(dato.encode("ascii"))

    except:
        print('no entendi, por favor vuelve a intentarlo')
    
