package com.example.firstexample.service;

import com.example.firstexample.entity.UserModel;
import com.example.firstexample.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepository;

    public List<UserModel> getAllUsers() {
        return userRepository.findAll();
    }

    public UserModel getUserById(Long id) {
        Optional<UserModel> userOptional = userRepository.findById(id);
        return userOptional.orElse(null);
    }

    public UserModel createUser(UserModel user) {
        return userRepository.save(user);
    }

    public UserModel updateUser(Long id, UserModel user) {
        user.setId(id); // Ensure the provided ID matches the user object
        return userRepository.save(user);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}
