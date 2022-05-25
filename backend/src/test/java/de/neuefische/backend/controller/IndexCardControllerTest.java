package de.neuefische.backend.controller;

import de.neuefische.backend.model.Difficulty;
import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.model.dto.IndexCardDto;
import de.neuefische.backend.repository.IndexCardRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class IndexCardControllerTest {

    @Autowired
    private IndexCardRepository repo;

    @Autowired
    private WebTestClient testClient;

    @BeforeEach
    public void cleanUp() {
        repo.deleteAll();
    }

    String baseUrl = "/api/index-card/";

    private final IndexCardDto testCardDto1= IndexCardDto.builder()
            .term1("test1")
            .term2("test2")
            .difficulty(Difficulty.EASY)
            .build();

    private final IndexCard testCard1= IndexCard.builder()
            .id("123")
            .term1("test1")
            .term2("test2")
            .difficulty(Difficulty.EASY)
            .build();

    private final IndexCard testCard2= IndexCard.builder()
            .id("456")
            .term1("test1")
            .term2("test2")
            .difficulty(Difficulty.HARD)
            .build();

    @Test
    void addNewIndexCard() {
        //given testCardDto1
        //when
        IndexCard actual = testClient.post()
                .uri(baseUrl)
                .bodyValue(testCardDto1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(IndexCard.class)
                .returnResult()
                .getResponseBody();
        //then
        assertNotNull(actual);
        assertNotNull(actual.getId());
        IndexCard expected = IndexCard
                .builder()
                .id(actual.getId())
                .term1("test1")
                .term2("test2")
                .difficulty(Difficulty.EASY)
                .build();
        assertEquals(expected, actual);
    }

    @Test
    void getAllIndexCards() {
        //given
        repo.insert(testCard1);
        repo.insert(testCard2);
        //when
        List<IndexCard> actual= testClient.get()
                .uri(baseUrl)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(IndexCard.class)
                .returnResult()
                .getResponseBody();
        //then
        List<IndexCard> expected = List.of(testCard1, testCard2);
        assertEquals(expected, actual);
    }

    @Test
    void updateIndexCard() {
        //given testCard1
        repo.insert(testCard1);
        IndexCardDto updatedIndexCard = IndexCardDto.builder()
                .term1("updatedTerm1")
                .term2("updatedTerm2")
                .difficulty(Difficulty.MEDIUM)
                .build();
        //when
        IndexCard actual = testClient.put()
                .uri(baseUrl+testCard1.getId())
                .bodyValue(updatedIndexCard)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(IndexCard.class)
                .returnResult()
                .getResponseBody();
        //then
        IndexCard expected = IndexCard.builder()
                .id(testCard1.getId())
                .term1("updatedTerm1")
                .term2("updatedTerm2")
                .difficulty(Difficulty.MEDIUM)
                .build();
        assertEquals(expected, actual);
    }


}