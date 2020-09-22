let db;

createNewUser = function (userName, userPass) {
    let newUser = { Name: userName, Password: userPass };
    let transaction = db.transaction(['users'], 'readwrite');
    let objectStore = transaction.objectStore('users');
    let request = objectStore.add(newUser);

    request.onsuccess = function () {
        console.log('Request Add New User Success!');
        //Do somthing here!
    };


    transaction.oncomplete = function () {
        console.log('Transaction completed: database modification finished.');

    };

    transaction.onerror = function () {
        console.log('Transaction not opened due to error');
    };
};

checkUser = function (name, password) {
    const checkName = name;
    const checkPass = password;
    let success = false;
    var transaction = db.transaction(["users"], "readwrite");
    transaction.oncomplete = function (event) {
        console.log("CheckUser() [Transaction] Success!");
    };
    transaction.onerror = function (event) {
        console.log("CheckUser() [Transaction] Error!");
    };
    var objectStore = transaction.objectStore("users");
    var objectStoreRequest = objectStore.getAll();

    objectStoreRequest.onsuccess = function (event) {
        console.log(objectStoreRequest.result);
        for (user=0;user<objectStoreRequest.result.length;user++) 
        {
            let dbName = objectStoreRequest.result[user].Name;
            let dbPass = objectStoreRequest.result[user].Password
            if (dbName == checkName) 
            {
                if (dbPass == checkPass) {
                    console.log("User Found & Login Matches!");
                    success = true;
                }
            }
            else {
                console.log("User NOT Found in DB");
                success = false;
            }   
            
        }

        console.log("CheckUser() [Request] Success!");
        return success;
    };
    
};

window.onload = function () {

    let dbRequest = window.indexedDB.open('users', 1);
    dbRequest.onerror = function () {
        console.log('Database failed to open');
    };

    dbRequest.onsuccess = function () {
        db = dbRequest.result;
        console.log(db);
        console.log('Database opened successfully');
    };

    dbRequest.onupgradeneeded = function (e) {
        let db = e.target.result;
        let objectStore = db.createObjectStore('users', { keyPath: 'user', autoIncrement: true });
        objectStore.createIndex('userName', 'Name', { unique: false });
        objectStore.createIndex('userPass', 'Password', { unique: false });
        console.log('Database setup complete');
    };
};