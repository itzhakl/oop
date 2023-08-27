
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
class Patient extends Person {
    constructor(firstName, lastName, patientID) {
        super(firstName, lastName);
        this.patientID = patientID;
    }
    getPatientInfo() {
        return `name:${this.firstName} ${this.lastName}, id: ${this.patientID}`;
    }
    getpatientID() {
        return this.patientID;
    }
}
class Doctor extends Person {
    constructor(firstName, lastName, doctorID, specialization) {
        super(firstName, lastName);
        this.doctorID = doctorID;
        this.specialization = specialization;
    }
    getDocorInfo() {
        return `name:${this.firstName} ${this.lastName}, id: ${this.doctorID}, specialization: ${this.specialization}`;
    }
    getdoctorID() {
        return this.doctorID;
    }
}
class Appointment {
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
    }
    getAppointmentInfo() {
        return `patient info: ${this.patient.getPatientInfo()}, doctor info: ${this.doctor.getDocorInfo()}, Appointment time: ${this.time} ${this.date}`;
    }
}
class Hospital {
    constructor(hospitalName, patients, doctors, appointments) {
        this.hospitalName = hospitalName;
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
    }
    addNewPatient(patient) {
        this.patients.push(patient);
        return true;
    }
    addNewDoctoe(doctor) {
        this.doctors.push(doctor);
        return true;
    }
    addNewAppointment(appointment) {
        this.appointments.push(appointment);
        return true;
    }
    showAllAppointment() {
        this.appointments.forEach(appointment => console.log(appointment.getAppointmentInfo()));
    }
    showAppointmentByDoctor(doctorID) {
        this.appointments.forEach(appointment => console.log(appointment.doctor.getdoctorID() === doctorID));
    }
    showAppointmentById(patientID) {
        this.appointments.forEach(appointment => console.log(appointment.patient.getpatientID() === patientID));
    }
    showAppointmentByDay(date) {
        this.appointments.forEach(appointment => console.log(appointment.date === date));
    }
}

const patients = [
    { firstName: "John", lastName: "Doe", patientID: "P001" },
    { firstName: "Jane", lastName: "Smith", patientID: "P002" },
    { firstName: "Michael", lastName: "Johnson", patientID: "P003" },
    { firstName: "Emily", lastName: "Williams", patientID: "P004" },
    { firstName: "William", lastName: "Brown", patientID: "P005" },
    { firstName: "Olivia", lastName: "Jones", patientID: "P006" },
    { firstName: "James", lastName: "Davis", patientID: "P007" },
    { firstName: "Sophia", lastName: "Miller", patientID: "P008" },
    { firstName: "Robert", lastName: "Wilson", patientID: "P009" },
    { firstName: "Ava", lastName: "Taylor", patientID: "P010" }
];

const doctors = [
    { firstName: "Dr. Sarah", lastName: "Johnson", doctorID: "D001", specialization: "Cardiology" },
    { firstName: "Dr. Michael", lastName: "Smith", doctorID: "D002", specialization: "Orthopedics" },
    { firstName: "Dr. Emily", lastName: "Williams", doctorID: "D003", specialization: "Pediatrics" },
    { firstName: "Dr. Christopher", lastName: "Brown", doctorID: "D004", specialization: "Dermatology" },
    { firstName: "Dr. Jessica", lastName: "Miller", doctorID: "D005", specialization: "Ophthalmology" }
];
