package com.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crud.entity.Student;
import com.crud.repo.StudentRepository;

@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    // CREATE
    public Student saveStudent(Student student) {
        return repo.save(student);
    }

    // READ ALL
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    // READ BY ID
    public Student getStudentById(Long id) {
        return repo.findById(id).orElse(null);
    }

    // UPDATE
    public Student updateStudent(Long id, Student student) {
        Student existing = repo.findById(id).orElse(null);

        if (existing != null) {
            existing.setName(student.getName());
            existing.setGender(student.getGender());
            existing.setJee(student.isJee());
            existing.setCet(student.isCet());
            existing.setYear(student.getYear());
            existing.setSubject1(student.getSubject1());
            existing.setSubject2(student.getSubject2());
            existing.setSubject3(student.getSubject3());
            existing.setSubject4(student.getSubject4());
            existing.setSubject5(student.getSubject5());

            return repo.save(existing);
        }
        return null;
    }

    // DELETE
    public void deleteStudent(Long id) {
        repo.deleteById(id);
    }
}