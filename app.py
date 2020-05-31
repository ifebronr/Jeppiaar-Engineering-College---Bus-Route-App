from flask import Flask ,render_template
import sqlite3
from employee import Employee

app = Flask(__name__)

# DB init 

conn = sqlite3.connect(':memory:',check_same_thread=False)
c = conn.cursor()

c.execute("""CREATE TABLE employees (
             first text,
             last text,
             pay integer   
            )""")

c = conn.cursor()
emp_1 = Employee('John', 'Doe', '80000')
def insert_emp(emp):
    with conn:
        c.execute("INSERT INTO employees VALUES (:first, :last, :pay)", 
                 {'first': emp.first, 'last': emp.last, 'pay': emp.pay})

def get_emps_by_name(lastname):
    c.execute("SELECT * FROM employees Where last=:last", {'last': lastname})
    return c.fetchall()

def update_pay(emp, pay):
    with conn:
        c.execute("""UPDATE employees SET pay = :pay
                     WHERE first = :first AND last = :last""", 
                     {'first': emp.first, 'last': emp.last, 'pay': pay})

def remove_emp(emp):
    with conn:
        c.execute("DELETE from employees WHERE first = :first AND last = :last", 
                   {'first': emp.first, 'last': emp.last})

insert_emp(emp_1)
update_pay(emp_1, 95000)


@app.route('/')
def home():
    return render_template('home.html')



@app.route('/request-bus-stop')
def requestStop():
    return render_template('request.html',title = "Request a Bus Stop" , pageHeading = "Request Bus Stop",pageDescription = "lorem alsfdklasldk;fasdlkfasdlfj")
@app.route('/feedback')
def feedback():
    return render_template('request.html',title = "Feedback" , pageHeading = "Feedback",pageDescription = "lorem alsfdklasldk;fasdlkfasdlfj")
@app.route('/complaints')
def complaints():
   
    emps = get_emps_by_name('Doe')
    print(emps)
    return render_template('request.html',title = "Complaints" , pageHeading = "Complaint",pageDescription = "lorem alsfdklasldk;fasdlkfasdlfj" )



if __name__== '__main__':
    app.run(debug=True)