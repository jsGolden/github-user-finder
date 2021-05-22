import React, { useEffect, useState } from 'react';

import {
    Container,
} from './styles';

import { RepositoryInterface, LanguageColor } from '../../types';

import { RepositoryCard } from '../RepositoryCard';
import axios from 'axios';

const GITHUB_COLORS_URL = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";

interface RepositoriesListProps {
    repositories: RepositoryInterface[];
}

export function RepositoriesList({ repositories }: RepositoriesListProps) {

    const [languageColors, setLanguageColors] = useState<LanguageColor>({});

    useEffect(() => {
        async function fetchLanguageColor() {
          try {
            const { data } = await axios.get<LanguageColor>(GITHUB_COLORS_URL);
            setLanguageColors(data);
          } catch {}
        }
        fetchLanguageColor();
      }, []);

    return (
        <Container>
            { repositories.map(repository => (
                <RepositoryCard
                    key={String(repository.id)}
                    repository={repository}
                    languageColors={languageColors}
                />
            )) }
        </Container>
    );
}