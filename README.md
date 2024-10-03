useState 와 useeffect의 차이점

usestate
count가 버튼을 클릭하는 동작과 함께 바로 1이 증가한다.

useeffect
countA가 버튼 클릭을 하면 증가하지만 위와는 다르게 countA가 변함에 따라 useeffect가 실행되어 changed 값도 바뀐 후 changed 값이 출력된다.




결론 
만약 단일 상태 변수로 충분히 필요한 기능을 구현할 수 있다면, UseState를 사용하는 것이 적절하고 하나의 상태 변화가 다른 상태에 영향을 미쳐야 하는 상황이라면 useEffect를 사용하는 것이 적절하다.
