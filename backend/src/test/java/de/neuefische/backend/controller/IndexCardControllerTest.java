package de.neuefische.backend.controller;

import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.repository.IndexCardRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

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

    @Test
    void addNewIndexCard() {
        //given
        IndexCard testCard= IndexCard.builder().term1("test1").term2("test2").build();
        //when
        IndexCard actual = testClient.post()
                .uri("/api/indexcard")
                .bodyValue(testCard)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(IndexCard.class)
                .returnResult()
                .getResponseBody();
        //then
        assertNotNull(actual);
        assertNotNull(actual.getId());
        IndexCard expected = IndexCard.builder().id(actual.getId()).term1("test1").term2("test2").build();
        assertEquals(expected, actual);
    }
}