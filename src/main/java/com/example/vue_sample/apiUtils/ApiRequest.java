package com.example.vue_sample.apiUtils;

import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

public class ApiRequest implements Serializable {
    private static final long serialVersionUID = -3985108491760680185L;
    private final Map<String, Object> parameters;
    private static final ObjectMapper objectMapper = new ObjectMapper();

    public ApiRequest(Map<String, Object> parameters) {
        this.parameters = parameters;
    }

    public Map<String, Object> getParameters() {
        return parameters;
    }

    public String getParameter(String parameterName) {
        return (String) parameters.get(parameterName);
    }

    public <T> List<T> adaptTo(String parameterName, Class<T> type) {
        List<T> list = (List<T>) parameters.get(parameterName);
        return list.stream()
                .filter(Objects::nonNull)
                .map(item -> objectMapper.convertValue(item, type))
                .collect(Collectors.toList());
    }

    public <T> T adaptTo(Class<T> type) {
        return objectMapper.convertValue(parameters, type);
    }
}
