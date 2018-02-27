import json


def __json_out(status,data,valReturn):
    _output = {}
    _output['status'] = status
    _output['data'] = data
    if(valReturn == False):
        print json.dumps(_output)
    else:
        return json.dumps(_output)


def success(data,valReturn=False):
    return __json_out(True,data,valReturn)

def error(data,valReturn=False):
    return __json_out(False,data,valReturn)
    