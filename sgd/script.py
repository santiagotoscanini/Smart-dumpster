import serial
import time

ser = serial.Serial("COM14", 9600)
hola = True
while(hola):
    file = open("basura.txt","w")
    ser.write("5".encode())
    time.sleep(20)
