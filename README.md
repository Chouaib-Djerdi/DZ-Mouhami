# How to set up this project

## Create Your Local Virtual Environment
There are two ways of doing this ,depending on your way of python installation, this is going to cover the way of **Anaconda** Distribution users.
Here are the steps to start:
### Backend Side:

1. Verify in your CMD (PowerShell) if you have `conda` installed:
```
PS C:\Users\User\Desktop\DZ-Mouhami> conda
```
you should get the list of commands you can use with `conda` ,if you didn't get the desired result you should check if **Anaconda** is added to `PATH` environment variables.

2. Clone the project on your local machine:
```
git clone https://github.com/Chouaib-Djerdi/DZ-Mouhami.git
```

3. Create your local virtual environment:
```
PS C:\Users\User\Desktop\DZ-Mouhami> conda create --name venv python=3.11.5
```
we are using python 3.11.5 version for this project, you can name the virtual environment as you please `venv` is just an example.

4. Activate your virtual environment:
```
PS C:\Users\User\Desktop\DZ-Mouhami> conda activate venv
(venv) PS C:\Users\lenovo\Desktop\DZ-Mouhami>
```

5. Install the Backend Dependencies:
```
(venv) PS C:\Users\User\Desktop\DZ-Mouhami> cd backend
(venv) PS C:\Users\User\Desktop\DZ-Mouhami\backend> pip install -r requirements.txt
```

6. Test if your backend is running correctly:
```
(venv) PS C:\Users\User\Desktop\DZ-Mouhami\backend> python manage.py runserver
```
see results on the local host : http://127.0.0.1:8000/

### Frontend Side:
You should have **Node.js** installed to use `npm` package manager in installing the react project dependencies.
1. Install the Frontend dependencies:
```
(venv) PS C:\Users\User\Desktop\DZ-Mouhami> cd frontend
(venv) PS C:\Users\User\Desktop\DZ-Mouhami\frontend> npm install
```
this will install all the dependencies that are listed in the **package.json** file.

2. Start your react app:
```
(venv) PS C:\Users\User\Desktop\DZ-Mouhami\frontend> npm run dev
```
see results on the local host : http://localhost:5173/
