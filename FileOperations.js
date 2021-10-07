const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");
var fname="";
var fname1="";
var content="";

var createFile = () => {
    fs.writeFile(fname, content, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("\nFile created!!");
        }
        repeat();
    });
};

var createFileWizaed = () => {
    console.log("\n  : File creation : ");
    rl.question("Name of the file : ", (ans) =>{
        fname = ans + ".txt";
        rl.question("Contects of the file : ", (ans) =>{
            content = ans;
            createFile();
        });
    });
};

var readFileWizaed = () => {
    rl.question("Name of the file : ", (ans) =>{
        fname = ans + ".txt";
        fs.readFile(fname,'utf8', (err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log("\n",data);
            }
            repeat();       
        });
    });
};

var appFile = () => {
    fs.appendFile(fname, content, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("\nData added!!");
        }
        repeat();
    });
};

var appendToFileWizaed = () => {
    rl.question("Name of the file : ", (ans) =>{
        fname = ans + ".txt";
        rl.question("Contects of the file : ", (ans) =>{
            content = "\n"+ans;
            appFile();
        });
    });
};
var renameFileWizaed = () => {
    rl.question("Enter old file name : ", (ans) =>{
        fname = ans + ".txt";
        rl.question("Enter new file name : ", (ans) =>{
            fname1 = ans + ".txt";
            fs.rename(fname, fname1, (err) => {
                if(err){
                    console.log(err);
                }else{
                    console.log("\nFile's name changed!!");
                }
                repeat();
            });
        });
    });
};
var deleteFileWizaed = () => {
    rl.question("Name of the file : ", (ans) =>{
        fname = ans + ".txt";
        fs.unlink(fname, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("\nFile deleted!!");
            }
            repeat();       
        });
    });
};

var menu = () => {
    console.log("\n----Operations----");
    console.log("0.Close File");
    console.log("1.Create File");
    console.log("2.Read File");
    console.log("3.Append in  File");
    console.log("4.Rename File");
    console.log("5.Delete File");
};

var start = () => {
    rl.question("Please enter your choice : ", (answer) =>{
        if(answer === "0"){
            rl.close();
        }
        else if(answer === "1"){
            createFileWizaed();
        }
        else if(answer === "2"){
            readFileWizaed();
        }
        else if(answer === "3"){
            appendToFileWizaed();
        }
        else if(answer === "4"){
            renameFileWizaed();
        }
        else if(answer === "5"){
            deleteFileWizaed();
        }
        else{
            console.log("\nPlease select proper number!!");
            repeat();
        }
    });
};

var repeat = () => {
    menu();
    start();
};

repeat();