package com.example.firstexample.repository;

import com.example.firstexample.entity.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<UserModel, Long> {
    // You can add custom queries or methods if needed
}