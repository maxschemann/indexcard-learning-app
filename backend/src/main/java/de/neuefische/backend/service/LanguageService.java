package de.neuefische.backend.service;

import de.neuefische.backend.model.Language;
import de.neuefische.backend.model.Languages;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

@NoArgsConstructor
@Service
public class LanguageService {
    private final Languages languages = new Languages();
    private final Language[] languageList = languages.getLanguageList();

    public Language[] provideLanguageList() {
        return languageList;
    }
}
