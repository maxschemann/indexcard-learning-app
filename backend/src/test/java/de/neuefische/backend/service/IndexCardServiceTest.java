package de.neuefische.backend.service;

import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.repository.IndexCardRepository;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class IndexCardServiceTest {

    private final IndexCardRepository repo = mock(IndexCardRepository.class);
    private final IndexCardService service = new IndexCardService(repo);

    @Test
    void addNewIndexCard() {
        //given
        IndexCard testCard= IndexCard.builder().languageA("test1").languageB("test2").build();
        //when
        when(repo.insert(testCard)).thenReturn(IndexCard.builder().id("123").languageA("test1").languageB("test2").build());
        IndexCard actual = service.addNewIndexCard(testCard);
        //then
        IndexCard expected = IndexCard.builder().id("123").languageA("test1").languageB("test2").build();
        verify(repo).insert(testCard);
        assertEquals(expected, actual);
    }
}