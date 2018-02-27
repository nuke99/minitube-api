import sys
import numpy as np
import time
import os.path
from outputs import success, error
from video_frame import frame_analise
if len(sys.argv) < 2:
    error('Missing parameters')
    exit()


file_path = sys.argv[1]
data = {}


#Get file video 
if os.path.exists(file_path) == False:
    error('Video file does not exist')
    exit()
frame_analise(file_path)
    

