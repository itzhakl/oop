class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Patient extends Person {
    private patientID: number;
    constructor(firstName: string, lastName: string, patientID: number){
        super(firstName, lastName);
        this.patientID = patientID
    }
    getPatientInfo() {
        return `name:${this.firstName} ${this.lastName}, id: ${this.patientID}`;
    }
    getpatientID() {
        return this.patientID;
    }
}

class Doctor extends Person {
    private doctorID: number;
    specialization: string;
    constructor(firstName: string, lastName: string, doctorID: number, specialization: string){
        super(firstName, lastName);
        this.doctorID = doctorID;
        this.specialization = specialization;
    }
    getDocorInfo() {
        return `name:${this.firstName} ${this.lastName}, id: ${this.doctorID}, specialization: ${this.specialization}`;
    }
    getdoctorID(){
        return this.doctorID;
    }
}

class Appointment {
    patient: Patient;
    doctor: Doctor;
    date: string;
    time: string;
    constructor(patient: Patient, doctor: Doctor, date: string, time: string){
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
    hospitalName: string;
    patients: Patient[];
    doctors: Doctor[];
    appointments: Appointment[];
    constructor(hospitalName: string, patients: Patient[], doctors: Doctor[], appointments: Appointment[]){
        this.hospitalName = hospitalName;
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
    }
    addNewPatient(patient: Patient) {
        this.patients.push(patient);
        return true;
    }
    addNewDoctoe(doctor: Doctor) {
        this.doctors.push(doctor);
        return true;
    }
    addNewAppointment(appointment: Appointment) {
        this.appointments.push(appointment);
        return true;
    }
    showAllAppointment() {
        this.appointments.forEach(appointment => console.log(appointment.getAppointmentInfo()));
    }
    showAppointmentByDoctor(doctorID: number) {
        this.appointments.forEach(appointment => console.log(appointment.doctor.getdoctorID() === doctorID));
    }
    showAppointmentById(patientID: number) {
        this.appointments.forEach(appointment => console.log(appointment.patient.getpatientID() === patientID));
    }
    showAppointmentByDay(date: string) {
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

