import { Module } from "@nestjs/common"
import { PostsController } from "@/posts/posts.controller"
import {
    DomainEventLogger,
    NotificationObserver,
    PostEventPublisher,
    RelevanceRecomputeObserver,
} from "@/posts/events/post-event.publisher"
import { PostEntityFactory } from "@/posts/factories/post-entity.factory"
import { PostsService } from "@/posts/posts.service"

@Module({
    controllers: [PostsController],
    providers: [
        PostsService,
        PostEntityFactory,
        PostEventPublisher,
        DomainEventLogger,
        NotificationObserver,
        RelevanceRecomputeObserver,
    ],
})
export class PostsModule {}
