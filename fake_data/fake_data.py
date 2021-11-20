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
        collection_cached = db["cachedsensors"]
        collection = db["sensors"]
        # Create an expiring (TTL) collection
        # The background task that removes expired documents runs every 60 seconds. As a result, documents may remain in a collection   
        # during the period between the expiration of the document and the running of the background task.
        collection_cached.create_index("inserted", expireAfterSeconds = 60)
        while True:
            fake_data = {"sensorsReading":[random.randint(0,255) for i in range(12)], "inserted":datetime.datetime.utcnow()}
            collection_cached.insert_one(fake_data)
            collection.insert_one(fake_data)
            sleep(0.050)




class classification(Thread):
    def __init__(self):
        Thread.__init__(self)
        self.daemon = True
        self.start()

    def run(self):
        cluster = MongoClient(mongoURI())
        db = cluster["EE4002D_dashboard"]
        collection_cached = db["cachedclassifications"]
        collection = db["classifications"]
        collection_cached.create_index("inserted", expireAfterSeconds = 60)
        while True:
            fake_data = {"classification":random.randint(0,15), "inserted":datetime.datetime.utcnow()}
            collection_cached.insert_one(fake_data)
            collection.insert_one(fake_data)
            
            sleep(5)
      
sensor()
classification()
while True:
    pass
