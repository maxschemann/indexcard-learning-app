package de.neuefische.backend.service;

import de.neuefische.backend.model.Difficulty;
import de.neuefische.backend.model.IndexCard;
import de.neuefische.backend.model.dto.IndexCardDto;
import de.neuefische.backend.repository.IndexCardRepository;
import org.junit.jupiter.api.Test;
import java.util.List;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class IndexCardServiceTest {

    private final IndexCardRepository repo = mock(IndexCardRepository.class);
    private final IndexCardService service = new IndexCardService(repo);

    private final IndexCardDto testCardDto1= IndexCardDto.builder()
            .term1("test1")
            .term2("test2")
            .difficulty(Difficulty.EASY)
            .build();

    private final IndexCard testCard1 = IndexCard.builder()
            .id("123")
            .term1("test1")
            .term2("test2")
            .difficulty(Difficulty.EASY)
            .build();

    private final IndexCard testCard2 = IndexCard.builder()
            .id("456")
            .term1("test1")
            .term2("test2")
            .difficulty(Difficulty.EASY)
            .build();

    @Test
    void addNewIndexCard() {
        //given
        IndexCard mockCard = IndexCard.builder()
                .term1("test1")
                .term2("test2")
                .difficulty(Difficulty.EASY)
                .build();
        //when
        when(repo.insert(mockCard)).thenReturn(testCard1);
        IndexCard actual = service.addNewIndexCard(testCardDto1);
        //then
        IndexCard expected = IndexCard.builder()
                .id("123")
                .term1("test1")
                .term2("test2")
                .difficulty(Difficulty.EASY)
                .build();
        verify(repo).insert(mockCard);
        assertEquals(expected, actual);
    }

    @Test
    void getAllIndexCards() {
        //given
        List<IndexCard> indexCards= List.of(testCard1, testCard2);
        //when
        when(repo.findAll()).thenReturn(indexCards);
        List <IndexCard> actual= service.getAllIndexCards();
        //then
        List<IndexCard> expected= List.of(testCard1, testCard2);
        verify(repo).findAll();
        assertEquals(expected, actual);
    }
}