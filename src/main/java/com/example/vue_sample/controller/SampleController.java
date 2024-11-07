package com.example.vue_sample.controller;

import com.example.vue_sample.apiUtils.ApiResponse;
import com.example.vue_sample.vo.SampleVO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class SampleController {
    @PostMapping("/api/hello")
    public ApiResponse saveEmployee(@RequestBody SampleVO vo){
        System.out.println(vo.getId());
        System.out.println(vo.getName());
        System.out.println(vo.getContent());

        return ApiResponse.of(vo);
    }
}
