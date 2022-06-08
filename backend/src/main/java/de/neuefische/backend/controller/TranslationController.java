package de.neuefische.backend.controller;

import de.neuefische.backend.model.Language;
import de.neuefische.backend.service.LanguageService;
import de.neuefische.backend.service.TranslationApiService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/translation/")
public class TranslationController {

    private final TranslationApiService apiService;

    private final LanguageService langService = new LanguageService();

    public TranslationController(TranslationApiService apiService) {
        this.apiService = apiService;
    }

    @GetMapping("{langOrigin}/{langTarget}/{term}")
    public String getTranslation(@PathVariable String langOrigin, @PathVariable String langTarget, @PathVariable String term) {
        return apiService.getTranslation(langOrigin, langTarget, term);
    }

    @GetMapping
    public Language[] getLanguages() {
        return langService.provideLanguageList();
    }
}
