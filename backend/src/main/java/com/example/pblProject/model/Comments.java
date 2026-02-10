package com.example.pblProject.model;
import jakarta.persistence.*;

@Entity
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int commentId;
    private String comment;
    private String timeStamp;
    @ManyToOne
    @JoinColumn(name = "userName", referencedColumnName = "userName", nullable = false)  // foreign key column
    private User user;
    @ManyToOne
    @JoinColumn(name = "threadId", referencedColumnName = "threadId", nullable = false)  // foreign key column
    private Thread thread;

    public int getCommentId() {
        return commentId;
    }

    public void setCommentId(int commentId) {
        this.commentId = commentId;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public String getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(String timeStamp) {
        this.timeStamp = timeStamp;
    }


    public User getUser() {
        return this.user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    public Thread getThread() {
        return thread;
    }

    public void setThread(Thread thread) {
        this.thread = thread;
    }
}
