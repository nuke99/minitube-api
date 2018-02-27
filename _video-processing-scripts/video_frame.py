import cv2
import numpy as np
import time

face_cascade = cv2.CascadeClassifier('./cascades/haarcascade_frontalface_default.xml')
eye_cascade = cv2.CascadeClassifier('./cascades/haarcascade_eye.xml')

frames_per_second = 1

def name_the_face(img):
    pass


def frame_analise(video_path):
    print "analysing frames"
    vidcaps = cv2.VideoCapture(video_path)
    success, image = vidcaps.read()
    count = 0; ['']
    fps = vidcaps.get(cv2.CAP_PROP_FPS)
    multiplier = fps * frames_per_second

    while success:
        frameId = int(round(vidcaps.get(1)))
        success, image = vidcaps.read()
        count +1

        if(frameId % multiplier < 1 and image is not None):
            grayd = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

            faces = face_cascade.detectMultiScale(grayd)
            if type(faces) is np.ndarray : 
                for (x,y,w,h) in faces:
                    sub_face = image[y:y+h, x:x+w]
                    gray_face = grayd[y:y+h, x:x+w]
                    eyes = eye_cascade.detectMultiScale(gray_face)

                    if(len(eyes) >=1 ):
                        # Talk to the neural net and get a name
                        print "has faces"
                        name_the_face(gray_face)