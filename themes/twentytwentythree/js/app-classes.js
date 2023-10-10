//**********************************************************************
// Author:      John Oliver (joliver)
// Name:        AgentApp
// Purpose:     "Class" for an agent application
// Members:     agentID
//              agentName
//              appID
//              dateStarted
//              dateStopped
//              dateApproved
//              dateSigned
//              user
//              pass
//              reason
//              stateID
//              stateName
//              type
//              stat
//**********************************************************************
function AgentApp() {
  this.agentID       = "";
  this.agentName     = "";
  this.applicationID = "";
  this.datestarted   = "";
  this.datestopped   = "";
  this.dateapproved  = "";
  this.datesigned    = "";
  this.username      = "";
  this.password      = "";
  this.reasoncode    = "";
  this.stateID       = "";
  this.stateName     = "";
  this.typeofapp     = "";
  this.stat          = "";
  this.getInfo = function() {
    return 'agentID: ' + this.agentID + '\n' +
           'appID: ' + this.applicationID + '\n' +
           'datestarted: ' + this.datestarted + '\n' +
           'datestopped: ' + this.datestopped + '\n' +
           'dateapproved: ' + this.dateapproved + '\n' +
           'datesigned: ' + this.datesigned + '\n' +
           'user: ' + this.username + '\n' +
           'pass: ' + this.password + '\n' +
           'reason: ' + this.reasoncode + '\n' +
           'stateID: ' + this.stateID + '\n' +
           'type: ' + this.typeofapp + '\n' +
           'stat: ' + this.stat;
  };
  this.getType = function() {
    return "AgentApp";
  };
}

//**********************************************************************
// Author:      John Oliver (joliver)
// Name:        Document
// Purpose:     "Class" for a document
// Members:     name
//              type
//              lnk
//**********************************************************************
function Document() {
  this.name = "";
  this.type = "";
  this.lnk  = "";
  this.seq  = "";
  this.id   = "";
  this.getInfo = function() {
    return "name: " + this.name + '\n' +
           "type: " + this.type + '\n' +
           "seq: " + this.seq + '\n' +
           "link: " + this.lnk;
  };
  this.getType = function() {
    return "Document";
  };
}

//**********************************************************************
// Author:      John Oliver (joliver)
// Name:        UserDocument
// Purpose:     "Class" for a user document
// Members:     filename
//              type
//**********************************************************************
function UserDocument() {
  this.filename = "";
  this.type     = "";
  this.getInfo = function() {
    return "filename: " + this.filename + '\n' +
           "type: " + this.type;
  };
  this.getType = function() {
    return "UserDocument";
  };
}

//**********************************************************************
// Author:      John Oliver (joliver)
// Name:        UserNote
// Purpose:     "Class" for a user document
// Members:     subject
//              createdBy
//              dateCreated
//              note
//**********************************************************************
function UserNote() {
  this.subject = "";
  this.createdBy = "";
  this.dateCreated = "";
  this.note = "";
  this.getInfo = function() {
    return "subject: " + this.subject + '\n' +
           "createdBy: " + this.createdBy + '\n' +
           "dateCreated: " + this.dateCreated + '\n' +
           "note: " + this.note;
  };
  this.getType = function() {
    return "UserNote";
  };
}