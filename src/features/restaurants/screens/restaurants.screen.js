import React from "react";
import styled from "styled-components/native";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`};
`;
const SearchView = styled(View)`
  padding: ${(props) => props.theme.space[2]};
`;
const ListView = styled(View)`
flex: 1;
padding: ${(props) => props.theme.space[2]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchView>
        <Searchbar placeholder="Search" />
      </SearchView>
      <ListView>
        <RestaurantInfoCard />
      </ListView>
    </SafeArea>
  );
};
