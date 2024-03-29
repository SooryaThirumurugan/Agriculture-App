package com.example.firstexample.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String borrowerName;
    private double amount;

    // Constructors, getters, and setters
    public Loan() {}

    public Loan(String borrowerName, double amount) {
        this.borrowerName = borrowerName;
        this.amount = amount;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBorrowerName() {
        return borrowerName;
    }

    public void setBorrowerName(String borrowerName) {
        this.borrowerName = borrowerName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount =amount;
    }
}