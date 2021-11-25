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
        collection_cached = db["cachedsensors"]
        collection = db["sensors"]
        # Create an expiring (TTL) collection
        # The background task that removes expired documents runs every 60 seconds. As a result, documents may remain in a collection   
        # during the period between the expiration of the document and the running of the background task.
        collection_cached.create_index("inserted", expireAfterSeconds = 60)
        ## create fake data
        step = int(1024/12)
        x, count, classification = 0, 0, 0        
        steps = [step*i for i in range(12)]
        while True:
            x = (x+0.02)%(2*np.pi)
            data = [((int((256*np.sin(x)))+512)+i)%1024 for i in steps]
            data.append(classification)
            if count == 0:
                classification = random.randint(0, 9)
                count = 1
            else:
                count = (count+1)%50
            fake_data = {"sensorsReading":data, "inserted":datetime.datetime.utcnow()}
            collection_cached.insert_one(fake_data)
            collection.insert_one(fake_data)
            print(fake_data)
            sleep(0.10)

    
sensor()
while True:
    pass
