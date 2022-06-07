package de.neuefische.backend.controller;

import de.neuefische.backend.service.TranslationApiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/translation/")
public class TranslationController {

    private final TranslationApiService apiService;

    public TranslationController(TranslationApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("{term}")
    public String getTranslation(@PathVariable String term) {
        return apiService.getTranslation(term);
    }
}
