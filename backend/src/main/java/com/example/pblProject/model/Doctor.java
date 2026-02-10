package com.example.pblProject.model;
import jakarta.persistence.*;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int DoctorId;
    private String specialization;
    private String hospital_clinic;
    private String license_file_name;

    @OneToOne
    @JoinColumn(name = "username", referencedColumnName = "username", nullable = false)
    private User user;


    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getHospital_clinic() {
        return hospital_clinic;
    }

    public void setHospital_clinic(String hospital_clinic) {
        this.hospital_clinic = hospital_clinic;
    }

    public String getLicense_file_name() {
        return license_file_name;
    }

    public void setLicense_file_name(String license_file_name) {
        this.license_file_name = license_file_name;
    }

    public String getUsername() {
        return this.user.getUsername();
    }

    public User getUser() {
        return this.user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getDoctorId() {
        return DoctorId;
    }

    public void setDoctorId(int doctorId) {
        DoctorId = doctorId;
    }
}
