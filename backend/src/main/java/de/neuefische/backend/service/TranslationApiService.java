package de.neuefische.backend.service;

import de.neuefische.backend.model.dto.api.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class TranslationApiService {

    private static final String URL = "https://od-api.oxforddictionaries.com:443/api/v2/translations/";

    private final WebClient webClient = WebClient.builder().build();

    @Value("${API_APP_ID}")
    private String appId;

    @Value("${API_APP_KEY}")
    private String appKey;

    public String getTranslation(String langOrigin, String langTarget, String term) {

        String newUrl = URL + langOrigin +"/"+langTarget+"/"+term;

            ResponseEntity<Response> answer = webClient.get()
                    .uri(newUrl)
                    .header("app_id", appId)
                    .header("app_key", appKey)
                    .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                    .retrieve()
                    .toEntity(Response.class)
                    .block();

        return parseTranslation(answer.getBody());
    }

    public String parseTranslation(Response response) {
        Result[] results = response.getResults();
        LexicalEntry[] lexicalEntries = results[0].getLexicalEntries();
        LexicalEntry lexicalEntry = lexicalEntries[0];
        Entry[] entries = lexicalEntry.getEntries();
        Entry entry = entries[0];
        Sense[] senses = entry.getSenses();
        Sense sense = senses[0];
        Translation[] translations = sense.getTranslations();
        return translations[0].getText();
    }
}
