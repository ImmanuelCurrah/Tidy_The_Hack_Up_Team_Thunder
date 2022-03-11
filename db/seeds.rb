# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Event.destroy_all
Comment.destroy_all
Participant.destroy_all

@mike = User.create({:name => "Mike51", :email => "m@m.com", :password_digest => "12345678"})
@nick = User.create({:name => "nick51", :email => "m@m.com", :password_digest => "12345678"})
@manny = User.create({:name => "manny51", :email => "m@m.com", :password_digest => "12345678"})

@event = Event.create({:name => "cleaning time", :description => "cleaning", :equipment => "all these things reeeee", :participants_needed => 5, :donations => 6000, :start_date => "2001-02-03T04:05:06+00:00", :end_date => "2001-02-03T04:05:06+00:00", :user_id => @mike.id})

Comment.create({:message => "this is my first comment", :user_id => @mike.id, :event_id => @event.id})

Participant.create({:event_id => @event.id, :user_id => @mike.id})
Participant.create({:event_id => @event.id, :user_id => @nick.id})
Participant.create({:event_id => @event.id, :user_id => @manny.id})



