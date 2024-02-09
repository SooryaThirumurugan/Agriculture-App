package com.example.firstexample.repository;



import com.example.firstexample.entity.LoanApplicantModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanApplicantRepository extends JpaRepository<LoanApplicantModel, Integer> {
    // You can add custom query methods if needed
}