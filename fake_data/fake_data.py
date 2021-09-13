from pymongo import MongoClient
from mongoURI import mongoURI
from threading import Thread
import random
import datetime
from time import sleep


class sensor(Thread):
    def __init__(self):
        Thread.__init__(self)
        self.daemon = True
        self.start()

    def run(self):
        cluster = MongoClient(mongoURI())
        db = cluster["EE4002D_dashboard"]
        collection = db["sensors"]
        while True:
            fake_data = {"sensorsReading":[random.randint(0,255) for i in range(16)], "date":datetime.datetime.now()}
            collection.insert_one(fake_data)
            sleep(0.02) 

class classification(Thread):
    def __init__(self):
        Thread.__init__(self)
        self.daemon = True
        self.start()

    def run(self):
        cluster = MongoClient(mongoURI())
        db = cluster["EE4002D_dashboard"]
        collection = db["classifications"]
        while True:
            fake_data = {"classification":random.randint(0,15), "date":datetime.datetime.now()}
            collection.insert_one(fake_data)
            sleep(5)
      
sensor()
classification()
while True:
    pass
