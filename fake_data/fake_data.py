from pymongo import MongoClient
from mongoURI import mongoURI
from threading import Thread
import random
import datetime
from time import sleep
import numpy as np

class sensor(Thread):
    def __init__(self):
        Thread.__init__(self)
        self.daemon = True
        self.start()

    def run(self):
        cluster = MongoClient(mongoURI())
        db = cluster["EE4002D_dashboard"]
        collection = db["sensors"]
        i = 0
        while True:
            fake_data = {"id": i, "sensorsReading":[random.randint(0,255) for i in range(12)], "inserted":datetime.datetime.utcnow()}
            collection.insert_one(fake_data)
            sleep(1)

sensor()
while True:
    pass
