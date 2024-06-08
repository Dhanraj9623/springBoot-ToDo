package com.todoProject.todo.service;

import com.todoProject.todo.dto.JwtAuthResponse;
import com.todoProject.todo.dto.LoginDto;
import com.todoProject.todo.dto.RegisterDto;

public interface AuthService {
    String register(RegisterDto registerDto);

    JwtAuthResponse login(LoginDto loginDto);
}
