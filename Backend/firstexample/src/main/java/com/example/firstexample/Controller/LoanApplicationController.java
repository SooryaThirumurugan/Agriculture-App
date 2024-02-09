package com.example.firstexample.Controller;
import com.example.firstexample.entity.LoanApplicantModel;
import com.example.firstexample.service.LoanApplicantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/loanApplicants")
public class LoanApplicationController{

    @Autowired
    private LoanApplicantService loanApplicantService;

    // GET method to retrieve all loan applicants
    @GetMapping
    public List<LoanApplicantModel> getAllLoanApplicants() {
        return loanApplicantService.getAllLoanApplicants();
    }

    // POST method to create a new loan applicant
    @PostMapping
    public LoanApplicantModel createLoanApplicant(@RequestBody LoanApplicantModel loanApplicant) {
        return loanApplicantService.saveLoanApplicant(loanApplicant);
    }
}