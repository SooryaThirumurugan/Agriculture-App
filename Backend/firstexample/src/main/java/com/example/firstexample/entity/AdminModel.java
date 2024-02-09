// package com.example.firstexample.entity;
// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// public class AdminModel {

//     public Long getId() {
//         return id;
//     }

//     public void setId(Long id) {
//         this.id = id;
//     }

//     public String getEmail() {
//         return email;
//     }

//     public void setEmail(String email) {
//         this.email = email;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }

//     public String getMobileNumber() {
//         return mobileNumber;
//     }

//     public void setMobileNumber(String mobileNumber) {
//         this.mobileNumber = mobileNumber;
//     }

//     public String getUserRole() {
//         return userRole;
//     }

//     public void setUserRole(String userRole) {
//         this.userRole = userRole;
//     }

//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private Long id; // Auto-generated ID, you can adjust as needed

//     private String email;
//     private String password;
//     private String mobileNumber;
//     private String userRole;

//     // Constructors, getters, and setters

//     // Default constructor
//     public AdminModel() {
//     }

//     // Parameterized constructor
//     public AdminModel(String email, String password, String mobileNumber, String userRole) {
//         this.email = email;
//         this.password = password;
//         this.mobileNumber = mobileNumber;
//         this.userRole = userRole;
//     }

    
// }
