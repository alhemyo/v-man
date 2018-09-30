from py2neo import authenticate, Graph

test = True

if test:
    authenticate("localhost:7474", "neo4j", "admin123")
    graph = Graph("http://localhost:7474/db/data/")

else:
    authenticate("hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24780",
                 "admin", "b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk")
    graph = Graph("bolt://hobby-llcolmhlfknpgbkekogpbhbl.dbs.graphenedb.com:24786",
                  user="admin", password="b.gXG8lmaG9deu.Dy50O3vtQ3BGbTZk",
                  bolt=True, secure=True, http_port=24786, https_port=24780)


secret_key = 'supersecretkey'