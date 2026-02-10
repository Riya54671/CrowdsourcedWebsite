package com.example.pblProject.model;
import jakarta.persistence.*;

@Entity
public class Researcher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ResearcherId;

    private String institute;
    private String position;
    private String field_of_study;
    @OneToOne
    @JoinColumn(name = "username", referencedColumnName = "username", nullable = false)
    private User user;

    public String getInstitute() {
        return institute;
    }

    public String getPosition() {
        return position;
    }

    public String getField_of_study() {
        return field_of_study;
    }


    public void setInstitute(String institute) {
        this.institute = institute;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public void setField_of_study(String field_of_study) {
        this.field_of_study = field_of_study;
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

    public int getResearcherId() {
        return ResearcherId;
    }

    public void setResearcherId(int researcherId) {
        ResearcherId = researcherId;
    }
}
