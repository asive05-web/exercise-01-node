//index.js

import mysql from 'mysql2/promise';
import {config} from 'dotenv';

config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

console.log('Running the script');

const getEmployeeData = async () => {
    try {
        let [data] = await pool.query('SELECT employee_id, first_name, last_name, email, phone_number, department, salary FROM employees;');
        console.log(data); 
        return data;
    } catch (err) {
        console.error("Error getting users:", err);
        throw err;
    }
};

getEmployeeData();


const getEmployeeById = async (employeeId) => {
    try {
        let [data] = await pool.query('SELECT employee_id, first_name, last_name, email, phone_number, department, salary FROM employees WHERE employee_id = ?;', [employeeId]);
        console.log(data);
        return data;
    } catch (err) {
        console.error("Error getting employee by ID:", err);
        throw err;
    }
};

const addEmployee = async (firstName, lastName, email, phoneNumber, department, salary) => {
    try {

        await pool.query('INSERT INTO employees (first_name, last_name, email, phone_number, department, salary) VALUES (?, ?, ?, ?, ?, ?);', 
            ["Asive", "Simoki", "asivedanielsimoki@gmail.com", "0765927136", "Cleaning", "5500"]);


        let [data] = await pool.query('SELECT employee_id, first_name, last_name, email, phone_number, department, salary FROM employees;');
        console.log(data);
        return data;
    } catch (err) {
        console.error("Error adding employee:", err);
        throw err;
    }
};


const removeEmployee = async (employeeId) => {
    try {
        await pool.query('DELETE FROM employees WHERE employee_id = ?;', [employeeId]);


        let [data] = await pool.query('SELECT employee_id, first_name, last_name, email, phone_number, department, salary FROM employees;');
        console.log(data);
        return data;
    } catch (err) {
        console.error("Error removing employee:", err);
        throw err;
    }
}; 

const updateEmployee = async (employeeId, firstName, lastName, email, phoneNumber, department, salary) => {
    try {
        
        await pool.query('UPDATE employees SET first_name = ?, last_name = ?, email = ?, phone_number = ?, department = ?, salary = ? WHERE employee_id = ?;', 
            [firstName, lastName, email, phoneNumber, department, salary, employeeId]);

       
        let [data] = await pool.query('SELECT employee_id, first_name, last_name, email, phone_number, department, salary FROM employees WHERE employee_id = ?;', [employeeId]);
        console.log(data);
        return data;
    } catch (err) {
        console.error("Error updating employee:", err);
        throw err;
    }
};








