import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { metrics } from "../themes";

const Stars = styled.div`
    font-size: ${metrics.H2}px;
    line-height: 2;
    color: ${(props) => props.theme.highlight};
`;

const Rating = (props) => {
    const [rating, setRating] = useState(0);
    const [hovered, setHovered] = useState(0);
    const [input, setInput] = useState(true);

    useEffect(() => {
        setInput(props.input);
        setRating(props.rating);
    }, []);

    const changeRating = (newRating) => {
        setRating(newRating);
        if (props.onChange) {
            props.onChange(newRating);
        }
    };

    const hoverRating = (rating) => {
        setHovered(rating);
    };

    const renderStars = () => {
        const stars = [1, 2, 3, 4, 5];
        return stars.map((star) => {
            return (
                <span
                    style={{ cursor: "pointer" }}
                    onClick={() => input && changeRating(star)}
                    onMouseEnter={() => input && hoverRating(star)}
                    onMouseLeave={() => input && hoverRating(0)}
                >
                    {hovered >= star || rating >= star ? "★" : "☆"}
                </span>
            );
        });
    };

    return <Stars className="rating">{renderStars()}</Stars>;
};

export default Rating;
