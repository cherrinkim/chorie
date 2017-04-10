
function errorHandler(e) {
    var msg = '';

    switch (e.code) {
        case FileError.QUOTA_EXCEEDED_ERR:
            msg = 'QUOTA_EXCEEDED_ERR';
            break;
        case FileError.NOT_FOUND_ERR:
            msg = 'NOT_FOUND_ERR';
            break;
        case FileError.SECURITY_ERR:
            msg = 'SECURITY_ERR';
            break;
        case FileError.INVALID_MODIFICATION_ERR:
            msg = 'INVALID_MODIFICATION_ERR';
            break;
        case FileError.INVALID_STATE_ERR:
            msg = 'INVALID_STATE_ERR';
            break;
        case  FileError.PATH_EXISTS_ERR:
            msg = 'FILE_EXISTS';
            break;
        default:
            msg = 'Unknown Error';
            break;
    };

    console.log('Error: ' + msg);
}

function createFile() {
    var type = window.PERSISTENT;
    var size = 5*1024*1024;

    window.parent.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {
        fs.root.getFile('log.txt', {create: true, exclusive: true}, function(fileEntry) {
            console.log('File creation successfull!')
        }, errorCallback);
    }

    function errorCallback(error) {
        console.log("ERROR: " + error.code)
        errorHandler(error)
    }

}
function writeFile() {
    var type = window.PERSISTENT;
    var size = 5*1024*1024;

    window.parent.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {

        fs.root.getFile('log.txt', {create: true}, function(fileEntry) {

            fileEntry.createWriter(function(fileWriter) {
                fileWriter.onwriteend = function(e) {
                    console.log('Write completed.');
                };

                fileWriter.onerror = function(e) {
                    console.log('Write failed: ' + e.toString());
                };

                var blob = new Blob(['Lorem Ipsum'], {type: 'text/plain'});
                fileWriter.write(blob);
            }, errorCallback);

        }, errorCallback);

    }

    function errorCallback(error) {
        console.log("ERROR: " + error.code)
        errorHandler(error)
    }

}
function readFile() {
    var type = window.PERSISTENT;
    var size = 5*1024*1024;

    window.parent.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {

        fs.root.getFile('log.txt', {}, function(fileEntry) {

            fileEntry.file(function(file) {
                var reader = new FileReader();

                reader.onloadend = function(e) {
                    var txtArea = document.getElementById('textarea');
                    txtArea.value = this.result;
                };

                reader.readAsText(file);

            }, errorCallback);

        }, errorCallback);
    }

    function errorCallback(error) {
        console.log("ERROR: " + error.code)
        errorHandler(error)
    }

}
function removeFile() {
    var type = window.PERSISTENT;
    var size = 5*1024*1024;

    window.parent.requestFileSystem(type, size, successCallback, errorCallback)

    function successCallback(fs) {
        fs.root.getFile('log.txt', {create: false}, function(fileEntry) {

            fileEntry.remove(function() {
                console.log('File removed.');
            }, errorCallback);

        }, errorCallback);
    }

    function errorCallback(error) {
        console.log("ERROR: " + error.code)
        errorHandler(error)
    }

}
function onFSSuccess(fs) {


    console.log(fs);
}
function onError(e) {


    console.log(e);
}



function onDeviceReady() {

    //Just writing some console messages
    if (window.cordova.logger) {
        window.cordova.logger.__onDeviceReady();
    }
    console.log("Device Ready!");
    console.log("before");
    window.parent.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFSSuccess, onError);

    console.log("after");


    document.getElementById("createFile").addEventListener("click", createFile);
    document.getElementById("writeFile").addEventListener("click", writeFile);
    document.getElementById("readFile").addEventListener("click", readFile);
    document.getElementById("removeFile").addEventListener("click", removeFile);


}


document.addEventListener('deviceready', onDeviceReady, false);



