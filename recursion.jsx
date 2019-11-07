var myFolder 

function batch_process(theFolder)
{
    var fileList = theFolder.getFiles();
    for(var f=0; f<fileList.length; f++)
    {
        var myFile = fileList[f];
        if(myFile instanceof File && myFile.name.match(/\.indd$/))
        {
            //service here
        }
        else if(myFile instanceof Folder)
        {
            batch_process(myFile);
        }
    }
}
