package com.example.firstexample.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.firstexample.entity.Loan;

@Repository
public interface LoanRepository extends JpaRepository<Loan,Long>{
}