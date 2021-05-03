import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./Search";
import MovieDetail from "./MovieDetail";
import API from "../utils/API";

class Omdb extends Component{
    state = {
        result: {},
        search: ""
    }

    componentDidMount(){
        this.searchMovies("The Matrix")
    }

    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({results: res.data}))
            .catch(err => console.log(err))
    }

    handleInputChange = event => {
        const value = event.target.value;
        const movie = event.target.movie;
        this.setState({
            [movie]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchMovies(this.state.search);
    }

    render(){
        <Container>
            <Row>
                <Col size = "md-8">
                    <Card
                    heading = {this.state.result.Title || "Search for a Movie"}
                    >
                        {this.state.result.Title ? (
                            <MovieDetail
                                title= {this.state.result.Title}
                                src = {this.state.result.Poster}
                                released = {this.state.result.Released}
                            />
                        ) : (
                            <h3>No Results to Display</h3>
                        )}

                    </Card>
                </Col>
                <Col size = "md-4">
                    <Card heading = "Search">
                        <SearchForm
                        value = {this.state.search}
                        handleInputChange = {this.handleInputChange}
                        handleFormSubmit = {this.handleFormSubmit}
                        />
                    </Card>
                </Col>
            </Row>
        </Container>
    }

}

export default Omdb;