import renderer from "react-test-renderer";
import PhotoComponent from "../components/photo/photoComponent";
import React from "react";
import Post from "../components/post/Post";

test('Photo component test', () => {
    const component = renderer.create(
        <PhotoComponent thumbnailUrl="http://test" title="test" url="http://test" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('Post component test', () => {
    const component = renderer.create(
        <Post body="test" title="test" />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});
