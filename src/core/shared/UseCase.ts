export default interface UseCase<I, O> {
    run(input: I): Promise<O>;
}